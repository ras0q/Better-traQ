import { z } from 'zod';

const zAction = z.union([
  z.literal('clickPrevPage'),
  z.literal('clickNextPage'),
  z.literal('scrollTopOfNavigationBar'),
  z.literal('clickNavigationSelectorHomeTab'),
  z.literal('clickNavigationBarHomeHomeChannel'),
  z.literal('clickNavigationBarHomeTopUnreadChannel'),
  z.literal('clickNavigationBarHomeBottomUnreadChannel'),
  z.literal('clickNavigationSelectorChannelsTab'),
  z.literal('focusNavigationBarChannelsChannelFilterInput'),
  z.literal('inputCurrentChannelNameNavigationBarChannelsChannelFilter'),
  z.literal('clickNavigationBarChannelsTopSearchResult'),
  z.literal('clickNavigationBarChannelsChannelFilterStar'),
  z.literal('expandNavigationBarChannelsTreeToCurrentChannel'),
  z.literal('clickNavigationBarChannelsNextChannel'),
  z.literal('clickNavigationBarChannelsPrevChannel'),
  z.literal('clickNavigationBarChannelsCurrentChannelHash'),
  z.literal('scrollNavigationBarChannelsToCurrentChannel'),
  z.literal('clickNavigationSelectorActivityTab'),
  z.literal('clickNavigationBarActivityIsNotAllToggleButton'),
  z.literal('clickNavigationBarActivityIsPerChannelToggleButton'),
  z.literal('toggleNavigationBarActivityFollowMode'),
  z.literal('clickNavigationSelectorUsersTab'),
  z.literal('focusNavigationBarUsersUserFilterInput'),
  z.literal('clickNavigationBarUsersTopSearchResult'),
  z.literal('clickNavigationSelectorClipTab'),
  z.literal('clickChannelHeaderChannelNameParentChannelName'),
  z.literal('mouseoverChannelViewMessageListNextMessage'),
  z.literal('mouseoverChannelViewMessageListPrevMessage'),
  z.literal('scrollToBottomOfChannelView'),
  z.literal('clickChannelViewLatestMessageStampPicker'),
  z.literal('clickChannelView2ndLatestMessageStampPicker'),
  z.literal('clickChannelView3rdLatestMessageStampPicker'),
  z.literal('clickChannelView4thLatestMessageStampPicker'),
  z.literal('clickChannelView5thLatestMessageStampPicker'),
  z.literal('clickChannelView6thLatestMessageStampPicker'),
  z.literal('clickChannelView7thLatestMessageStampPicker'),
  z.literal('clickChannelView8thLatestMessageStampPicker'),
  z.literal('clickChannelView9thLatestMessageStampPicker'),
  z.literal('clickChannelViewLatestMessageContextMenuRemovePin'),
  z.literal('clickChannelViewLatestMessageContextMenuAddPin'),
  z.literal('clickChannelViewLatestMessageContextMenuClipMessage'),
  z.literal('clickChannelViewLatestMessageContextMenuEditMessage'),
  z.literal('clickChannelViewLatestMessageContextMenuCopyLink'),
  z.literal('clickChannelViewLatestMessageContextMenuEmbedMessage'),
  z.literal('clickChannelViewLatestMessageContextMenuCopyMarkdown'),
  z.literal('clickChannelViewLatestMessageContextMenuDeleteMessage'),
  z.literal('clickChannelViewSelectedMessageContextMenuRemovePin'),
  z.literal('clickChannelViewSelectedMessageContextMenuAddPin'),
  z.literal('clickChannelViewSelectedMessageContextMenuClipMessage'),
  z.literal('clickChannelViewSelectedMessageContextMenuEditMessage'),
  z.literal('clickChannelViewSelectedMessageContextMenuCopyLink'),
  z.literal('clickChannelViewSelectedMessageContextMenuEmbedMessage'),
  z.literal('clickChannelViewSelectedMessageContextMenuCopyMarkdown'),
  z.literal('clickChannelViewSelectedMessageContextMenuDeleteMessage'),
  z.literal('clickChannelViewSelectedMessageSpoilers'),
  z.literal('clickChannelViewSelectedMessageDetailButton'),
  z.literal('clickChannelViewSelectedMessageStamps'),
  z.literal('focusChannelViewMessageInput'),
  z.literal('clickChannelViewMessageInputStampButton'),
  z.literal('clickSidebarOpener'),
  z.literal('clickSidebarCloser'),
  z.literal('clickSidebarContentViewers'),
  z.literal('blurActiveInputElement'),
  z.literal('mouseleaveChannelViewAllMessages'),
  z.literal('sleep100ms'),
]);

export type ActionEnum = z.infer<typeof zAction>;

export default zAction;
