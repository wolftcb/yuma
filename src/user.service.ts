import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'

interface user {
	email: string,
	uid: string,
	username: string,
	name: string,
	community: string
}

@Injectable()
export class UserService {
	private user: user

	constructor(private afAuth: AngularFireAuth) {

	}

	setUser(user: user) {
		this.user = user
	}

	getUsername(): string {
		return this.user.username
	}

	getEmail(): string {
		return this.user.email
	}

	getName(): string {
		return this.user.name
	}

	getCommunity(): string {
		return this.user.community
	}

	updateCommunity(newcommunity: string){
		return this.user.community = newcommunity
	}

	reAuth(email: string, password: string) {
		//return this.afAuth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(email, password))
	}

	async updatePassword(newpassword: string) {
		return (await this.afAuth.currentUser).updatePassword(newpassword)
	}

	async updateEmail(newemail: string) {
		return (await this.afAuth.currentUser).updateEmail(newemail)
	}

	updateName(newname: string){
		return this.user.name = newname
	}

	updateUsername(newusername: string){
		return this.user.username = newusername
	}

	async isAuthenticated() {
		if(this.user) return true

		const user = await this.afAuth.authState.pipe(first()).toPromise()

		/*if(user) {
			this.setUser({
				uid: user.uid,
				email: user.email,
				username: username,
				name: user.name,
				community: user.community
			})
*/
			return true
		}
		//return false
//}

	getUID(): string {
		return this.user.uid
	}
}