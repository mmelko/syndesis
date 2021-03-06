import { NgModule } from '@angular/core';

import { FileUploadModule } from 'ng2-file-upload';

import {
  AlertModule,
  CollapseModule,
  ModalModule,
  PopoverModule,
  TabsModule,
  TooltipModule,
  TypeaheadModule,
  BsDropdownModule,
  ComponentLoaderFactory
} from 'ngx-bootstrap';

import {
  ActionModule,
  BlockCopyModule,
  InlineCopyModule,
  ToastNotificationModule,
  ToastNotificationListModule,
  InlineNotificationModule,
  CardModule,
  ListModule,
  ToolbarModule,
  PaginationModule,
} from 'patternfly-ng';

const imports = [
  AlertModule.forRoot(),
  CollapseModule.forRoot(),
  ModalModule.forRoot(),
  PopoverModule.forRoot(),
  TabsModule.forRoot(),
  TooltipModule.forRoot(),
  TypeaheadModule.forRoot(),
  BsDropdownModule.forRoot(),
  ActionModule,
  BlockCopyModule,
  InlineCopyModule,
  ToastNotificationModule,
  ToastNotificationListModule,
  InlineNotificationModule,
  CardModule,
  ListModule,
  ToolbarModule,
  FileUploadModule
];

const _exports = [
  AlertModule,
  CollapseModule,
  ModalModule,
  PopoverModule,
  TabsModule,
  TooltipModule,
  TypeaheadModule,
  BsDropdownModule,
  ActionModule,
  BlockCopyModule,
  InlineCopyModule,
  ToastNotificationModule,
  ToastNotificationListModule,
  InlineNotificationModule,
  CardModule,
  ListModule,
  ToolbarModule,
  PaginationModule,
  FileUploadModule
];

@NgModule({
  imports: imports,
  providers: [ComponentLoaderFactory],
  exports: _exports
})
export class VendorModule {}
