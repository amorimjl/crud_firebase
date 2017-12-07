import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseApp } from 'angularfire2';
// import * as firebase from 'firebase';
// import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class ContactProvider {
  private PATH = 'contacts/';
  item = {name};

  constructor(private db: AngularFireDatabase) { }
  
    getAll() {
      return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map( c => ({ key : c.payload.key, ...c.payload.val()}));
      })
    }

    get(key : string){
      return this.db.object(this.PATH)
      .snapshotChanges()
      .map( c=> {
        return { key : c.key, ...c.payload.val() };
      })
    }

    getStreamer(name){
      // console.log(this.item.name)      
      return this.db.list(this.PATH, ref => ref.orderByChild('name').equalTo(name))
      .snapshotChanges()
      .map(changes => {
        return changes.map( c => ({ key : c.payload.key, ...c.payload.val()}));
      })
    }

    getGame(jogo){
      // console.log(this.item.name)      
      return this.db.list(this.PATH, ref => ref.orderByChild('game').equalTo(jogo))
      .snapshotChanges()
      .map(changes => {
        return changes.map( c => ({ key : c.payload.key, ...c.payload.val()}));
      })
    }

    save(contact: any){
      return new Promise ((resolve, reject) => {
        if(contact.key) {
          this.db.list(this.PATH)
          .update(contact.key, {name : contact.name , game : contact.game})
          .then(() => resolve())    
          .catch((e) => reject(e));
        }else {
          this.db.list(this.PATH)
          .push({name : contact.name, game: contact.game})
          .then(() => resolve());    
        }
      });
    }

    // public uploadAndSave(item: any){
    //   let contact = { $key: item.key, name:item.name, url: '', fullPath:'' };

    //   if(contact.$key){
    //     this.save(contact);
    //   }else{
    //     let storageRef = this.fb.storage().ref();
    //     let basePath = '/contacts/' + this.angularFireAuth.auth.currentUser.uid;
    //     contact.fullPath = basePath + '/' + contact.name + '.png';
    //     let uploadTask = storageRef.child(contact.fullPath).putString(item.fileToUpload, 'base64');
  
    //     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //     (snapshot) => {
    //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log(progress + "% done");
    //     },
    //     (error) => {
    //       console.error(error);
    //     },
    //     () => {
    //       contact.url = uploadTask.snapshot.downloadURL;
    //       this.save(contact);
    //     });
    //   }
    // }

    remove(key : string){
      return this.db.list(this.PATH).remove(key);
    }

     
  

}
