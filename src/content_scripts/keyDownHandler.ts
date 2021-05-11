import { getElements } from '@/content_scripts/getElements';
import { exec } from '@/content_scripts/utils/exec';
import {
  clickMessageTool,
  showMessageTool,
} from '@/content_scripts/utils/messageTool';
import { channels, getData } from '@/utils/storage';

const changeChannel = (path: string) => {
  return exec(`changeChannel("${path}")`);
};
const isNotSelectedInput = () => {
  const tagName = document.activeElement?.tagName;
  return tagName !== 'INPUT' && tagName !== 'TEXTAREA';
};

let keyState: Map<any, boolean> = new Map();
window.addEventListener('keyup', async (ev) => {
  const { key } = ev;
  keyState.set(key, false);
});

export const handler: (ev: KeyboardEvent) => void = async (ev) => {
  const { key } = ev;
  keyState.set(key, true);
  if (ev.altKey || ev.shiftKey || ev.ctrlKey || ev.metaKey) return;
  if (isNotSelectedInput()) {
    switch (key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0': {
        const url = await getData(channels);
        const targetChannel = url[`channel-${key}` as const];
        if (targetChannel) {
          changeChannel(targetChannel);
        } else {
          // eslint-disable-next-line no-alert
          alert('チャンネルを設定してください');
        }
        break;
      }
      case 'Escape': {
        document.querySelector('body')?.click();
        getElements.messages().forEach((el) => {
          el.dispatchEvent(new Event('mouseleave'));
        });
        break;
      }
      case 'q':
        getElements.navigations()[0].click();
        break;
      case 'w':
        getElements.channels()[0].click();
        break;
      case 'e':
        getElements.channels()[1].click();
        break;
      case 'a':
        getElements.navigations()[1].click();
        break;
      case 's':
        ev.preventDefault();
        getElements.filterInputs()[0].focus();
        break;
      case 'd':
        getElements.channelFilterStar().click();
        break;
      case 'z':
        getElements.navigations()[2].click();
        break;
      case 'x':
        getElements.activityToggleButtons()[0].click();
        break;
      case 'c':
        getElements.activityToggleButtons()[1].click();
        break;
      case 'n':
        ev.preventDefault();
        getElements.messageInput().focus();
        break;
      case 'm':
        ev.preventDefault();
        getElements.messageInputInsertStampButton().click();
        break;
      case 'b': {
        const messagesScroller = getElements.messagesScroller();
        if (!messagesScroller) break;
        messagesScroller.scrollTop = messagesScroller.scrollHeight;
        break;
      }
      case 'h':
        ev.preventDefault();
        getElements.filterInputs()[2].focus();
        break;
      case 'p':
        ev.preventDefault();
        showMessageTool(0);
        clickMessageTool(0);
        break;
      case 'o':
        ev.preventDefault();
        showMessageTool(1);
        clickMessageTool(0);
        break;
      case 'i':
        ev.preventDefault();
        showMessageTool(2);
        clickMessageTool(0);
        break;
      case 'u':
        ev.preventDefault();
        showMessageTool(3);
        clickMessageTool(0);
        break;
      case 'y':
        ev.preventDefault();
        showMessageTool(4);
        clickMessageTool(0);
        break;
      case 't':
        ev.preventDefault();
        showMessageTool(5);
        clickMessageTool(0);
        break;
      case 'l':
        (
          getElements.openSidebar() || getElements.closeSidebar()
        )?.dispatchEvent(new Event('click'));
        break;
      case ';':
        getElements.sidebarContent()[0].click();
        break;
      case 'j': {
        if (keyState.get('r')) {
          const navigation_place = getElements.getNavigationIndex();
          getElements.navigations()[(navigation_place + 1) % 5].click();
          break;
        } else {
          const viewContainer = getElements.messagesScroller();
          if (!viewContainer) break;
          const messages = getElements.messages();
          for (let i = 0; i < messages.length; i++) {
            if (messages[i].getBoundingClientRect().top > 11.625) {
              if (!messages[i + 1]) break;
              viewContainer.scrollTo({
                top:
                  viewContainer.scrollTop +
                  messages[i + 1].getBoundingClientRect().top -
                  78,
                behavior: 'smooth',
              });
              break;
            }
          }
        }
        break;
      }
      case 'k': {
        if (keyState.get('r')) {
          const navigation_place = getElements.getNavigationIndex();
          getElements.navigations()[(navigation_place - 1 + 5) % 5].click();
          break;
        } else {
          const viewContainer = getElements.messagesScroller();
          if (!viewContainer) break;

          const messages = getElements.messages();
          for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].getBoundingClientRect().top < 0) {
              if (i != 0)
                messages[i].scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest',
                });
              else
                viewContainer.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              break;
            }
          }
        }
        break;
      }
    }
  } else {
    switch (key) {
      case 'Escape':
        (
          (document.activeElement as HTMLInputElement) || HTMLTextAreaElement
        )?.blur();
        break;
      case 'ArrowUp': {
        const messageInput = getElements.messageInput();
        if (
          messageInput?.value === '' &&
          messageInput === document.activeElement
        ) {
          ev.preventDefault();
          showMessageTool(0);
          clickMessageTool(1);
          window.setTimeout(() => {
            if (getElements.messageToolsMenu()[2].innerText !== '編集') {
              window.setTimeout(() => {
                document.querySelector('body')?.click();
              }, 0);
              return;
            }
            getElements.messageToolsMenu()[2].click();
            document.querySelector('body')?.click();
            window.setTimeout(() => {
              getElements.messageEditor()?.focus();
            }, 0);
          }, 0);
        }
        break;
      }
    }
  }
};
