import { z } from 'zod';

const zAction = z.union([
  z.literal('cPrevPage'),
  z.literal('cNextPage'),
  z.literal('sTopOfNavigationBar'),
  z.literal('cTHTab'),
  z.literal('cNHHomeChannel'),
  z.literal('cNHTopUnreadChannel'),
  z.literal('cNHBottomUnreadChannel'),
  z.literal('cNavigationSelectorChannelsTab'),
  z.literal('fNCChannelFilterInput'),
  z.literal('iCurrentChannelNameNCChannelFilter'),
  z.literal('cNCTopSearchResult'),
  z.literal('cNCChannelFilterStar'),
  z.literal('eNCTreeToCurrentChannel'),
  z.literal('cNCNextChannel'),
  z.literal('cNCPrevChannel'),
  z.literal('cNCCurrentChannelHash'),
  z.literal('sNCToCurrentChannel'),
  z.literal('cNavigationSelectorActivityTab'),
  z.literal('cNAIsNotAllToggleButton'),
  z.literal('cNAIsPerChannelToggleButton'),
  z.literal('tNAFollowMode'),
  z.literal('cNavigationSelectorUsersTab'),
  z.literal('fNUUserFilterInput'),
  z.literal('cNUTopSearchResult'),
  z.literal('cNavigationSelectorClipTab'),
  z.literal('cHChannelNameParentChannelName'),
  z.literal('oVMessageListNextMessage'),
  z.literal('oVMessageListPrevMessage'),
  z.literal('sToBottomOfV'),
  z.literal('cVLatestMessageStampPicker'),
  z.literal('cV2ndLatestMessageStampPicker'),
  z.literal('cV3rdLatestMessageStampPicker'),
  z.literal('cV4thLatestMessageStampPicker'),
  z.literal('cV5thLatestMessageStampPicker'),
  z.literal('cV6thLatestMessageStampPicker'),
  z.literal('cV7thLatestMessageStampPicker'),
  z.literal('cV8thLatestMessageStampPicker'),
  z.literal('cV9thLatestMessageStampPicker'),
  z.literal('cVLatestMessageContextMenuRemovePin'),
  z.literal('cVLatestMessageContextMenuAddPin'),
  z.literal('cVLatestMessageContextMenuClipMessage'),
  z.literal('cVLatestMessageContextMenuEditMessage'),
  z.literal('cVLatestMessageContextMenuCopyLink'),
  z.literal('cVLatestMessageContextMenuEmbedMessage'),
  z.literal('cVLatestMessageContextMenuCopyMarkdown'),
  z.literal('cVLatestMessageContextMenuDeleteMessage'),
  z.literal('cVSelectedMessageContextMenuRemovePin'),
  z.literal('cVSelectedMessageContextMenuAddPin'),
  z.literal('cVSelectedMessageContextMenuClipMessage'),
  z.literal('cVSelectedMessageContextMenuEditMessage'),
  z.literal('cVSelectedMessageContextMenuCopyLink'),
  z.literal('cVSelectedMessageContextMenuEmbedMessage'),
  z.literal('cVSelectedMessageContextMenuCopyMarkdown'),
  z.literal('cVSelectedMessageContextMenuDeleteMessage'),
  z.literal('cVSelectedMessageSpoilers'),
  z.literal('cVSelectedMessageDetailButton'),
  z.literal('cVSelectedMessageStamps'),
  z.literal('fVMessageInput'),
  z.literal('cVMessageInputStampButton'),
  z.literal('cSidebarOpener'),
  z.literal('cSidebarCloser'),
  z.literal('cSidebarContentViewers'),
  z.literal('bActiveInputElement'),
  z.literal('lVAllMessages'),
  z.literal('sleep100ms'),
]);

export type ActionEnum = z.infer<typeof zAction>;

export default zAction;
