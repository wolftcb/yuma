import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  posts: Observable <any[]>
  
  constructor(db: AngularFirestore, private router: Router) { 
    this.posts = db.collection('posts').valueChanges();
  }

  ngOnInit() {
  }

  goTo(postID: string){
    this.router.navigate(['/tabs/post/' + postID.split('/')[0]])
  }
}
