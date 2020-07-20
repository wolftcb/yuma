import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
      { path: 'feed', loadChildren: '../feed/feed.module#FeedPageModule' },
      { path: 'chat', loadChildren: '../chat/chat.module#ChatPageModule' },
	//		{ path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule', canActivate: [AuthService] },
			{ path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule'/* canActivate: [AuthService] */},
			{ path: 'post/:id', loadChildren: '../post/post.module#PostPageModule' },
			{ path: 'edit-profile', loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule' },
		]
	}	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }
  