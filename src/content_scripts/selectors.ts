// regex %\.\w+ >% >%

/**
 * ホームチャンネルが存在するかどうか
 */
const homeChannelExists: () => boolean = () =>
  document.querySelector(
    '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div > h3'
  )?.innerHTML === 'ホームチャンネル';

const navigationSelector = (n: number) =>
  `#app > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(${n})`;

const channelViewNthLatestMessage = (n: number) =>
  `#app > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-last-child(${n})`;

const navigationBarActivityButton = (n: number) =>
  `#app > div > div > div > div > div > div > div > div > div > button:nth-child(${n})`;

const channelViewMessageTool = (n: number) =>
  `#app > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > svg:nth-child(${n})`;

const channelViewContextMenuNthChild = (n: number) =>
  `#message-menu-popup > div > div > span:nth-child(${n})`;

const channelViewContextMenuNthLastChild = (n: number) =>
  `#message-menu-popup > div > div > span:nth-last-child(${n})`;

/**
 * コンテキストメニューが自分のメッセージのものかどうか
 */
const ifMyMessageContextMenu = (): boolean =>
  document.querySelector(channelViewContextMenuNthLastChild(1))?.innerHTML ===
  ' 削除 ';

/**
 * Selectorのリストを返す関数
 */
const selectors: Record<SelectorEnum, () => string | null> = {
  popupNavigator: () => navigationSelector(1),
  previousPage: () => '#popup-navigator > div > div:nth-child(1)',
  nextPage: () => '#popup-navigator > div > div:nth-child(2)',
  navigationSelectorHomeTab: () => navigationSelector(2),
  navigationBarHomeHomeChannel: () =>
    homeChannelExists()
      ? '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1)'
      : null,
  navigationBarHomeTopUnreadChannel: () =>
    homeChannelExists()
      ? '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2)' // ホームチャンネルが存在する場合は2番目
      : '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1)', // ホームチャンネルが存在しない場合は1番目
  navigationSelectorChannelsTab: () => navigationSelector(3),
  navigationBarChannelsChannelFilterInput: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > div > input',
  navigationBarChannelsChannelFilterStar: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > button',
  navigationBarChannelsChannelList: () =>
    '#app > div > div > div > div > div > div > div > div > div > div:nth-child(3)',
  navigationBarChannelsChannelSelectedChannel: () =>
    '#app > div > div > div > div > div > div > div > div > div > div:nth-child(3) [aria-selected=true][class^=_container]',
  navigationBarChannelsChannelSelectedChannelHash: () =>
    '#app > div > div > div > div > div > div > div > div > div > div:nth-child(3) [aria-selected=true][class^=_hash]',
  navigationSelectorActivityTab: () => navigationSelector(4),
  navigationBarActivityIsNotAllToggleButton: () =>
    navigationBarActivityButton(1),
  navigationBarActivityIsPerChannelToggleButton: () =>
    navigationBarActivityButton(2),
  navigationBarActivityLatestMessage: () =>
    '#app > div > div > div > div > div > div > div > div > div:nth-child(2) > a:nth-child(1) > div',
  navigationSelectorUsersTab: () => navigationSelector(5),
  navigationBarUsersUserFilterInput: () =>
    '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div > input',
  navigationSelectorClipTab: () => navigationSelector(6),
  channelHeaderChannelName: () =>
    '#header > header > div > h2 > div > div:nth-child(1)',
  channelViewMessageList: () =>
    '#app > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1)',
  channelViewLatestMessage: () => channelViewNthLatestMessage(1),
  channelView2ndLatestMessage: () => channelViewNthLatestMessage(2),
  channelView3rdLatestMessage: () => channelViewNthLatestMessage(3),
  channelView4thLatestMessage: () => channelViewNthLatestMessage(4),
  channelView5thLatestMessage: () => channelViewNthLatestMessage(5),
  channelView6thLatestMessage: () => channelViewNthLatestMessage(6),
  channelView7thLatestMessage: () => channelViewNthLatestMessage(7),
  channelView8thLatestMessage: () => channelViewNthLatestMessage(8),
  channelView9thLatestMessage: () => channelViewNthLatestMessage(9),
  channelViewMessageToolStamp: () => channelViewMessageTool(1),
  channelViewMessageToolDots: () => channelViewMessageTool(2),
  channelViewContextMenuList: () => '#message-menu-popup > div > div',
  channelViewContextMenuRemovePin: () => channelViewContextMenuNthChild(1),
  channelViewContextMenuAddPin: () => channelViewContextMenuNthChild(1),
  channelViewContextMenuClipMessage: () => channelViewContextMenuNthChild(2),
  channelViewContextMenuEditMessage: () =>
    ifMyMessageContextMenu() ? channelViewContextMenuNthChild(3) : null,
  channelViewContextMenuCopyLink: () =>
    ifMyMessageContextMenu()
      ? channelViewContextMenuNthChild(4)
      : channelViewContextMenuNthChild(3),
  channelViewContextMenuEmbedMessage: () =>
    ifMyMessageContextMenu()
      ? channelViewContextMenuNthChild(5)
      : channelViewContextMenuNthChild(4),
  channelViewContextMenuCopyMarkdown: () =>
    ifMyMessageContextMenu()
      ? channelViewContextMenuNthLastChild(2)
      : channelViewContextMenuNthLastChild(1),
  channelViewContextMenuDeleteMessage: () =>
    ifMyMessageContextMenu() ? channelViewContextMenuNthLastChild(1) : null,
  channelViewMessageInput: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > div > div > div > textarea',
  channelViewMessageInputStampButton: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(3) > div > svg',
  sidebarOpener: () => '#sidebar-opener > div > svg',
  sidebarCloser: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > button > div',
  sidebarContentViewers: () =>
    '#app > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
};

export default selectors;