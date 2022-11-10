import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs/operators';
import { IProfile } from '../../interfaces/profile.interface';
import { IFormFields } from '../../interfaces/form-fields.interface';
import {IFormModal} from '../../interfaces/form-modal.interface';
import { DataService } from '../../services/data.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit {

  uploadPercent: Observable<any>;

  $profile: Observable<any>;
  profileCollectionRef =this.dataService.createCollection('profile');
  private itemId: string;

  formFields: Array<IFormFields> = [
    {
      label: 'Description',
      formControlName: 'description',
      placeholder: 'Description'
    },
    {
      label: 'Education',
      formControlName: 'degree',
      placeholder: 'Education'
    },
    {
      label: 'College',
      formControlName: 'college',
      placeholder: 'College'
    },
    // {
    //   label: 'Company Name',
    //   formControlName: 'company',
    //   placeholder: 'Company Name'
    // },
    {
      label: 'DOB',
      formControlName: 'dob',
      placeholder: 'Date of Birth'
    },
    {
      label: 'Email',
      formControlName: 'email',
      placeholder: 'Email'
    },
    {
      label: 'Certification',
      formControlName: 'certification',
      placeholder: 'certification'
    }
  ];

  formModalContent: IFormModal = {
    title: 'Try editing your profile information',
    buttonText: 'Edit profile',
    isVisible: false,
    isEditing: false,
    formFields: this.formFields
  };

  constructor(
    private afStorage: AngularFireStorage,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.$profile = this.dataService.getData(this.profileCollectionRef);
  }

  public uploadImage(event, id: string) {
    const file = event.target.files[0];
    const filePath = 'profile';
    const fileRef = this.afStorage.ref(filePath);
    const task = fileRef.put(file);

    // observe percentage changes
     this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(async () => {
         fileRef.getDownloadURL().toPromise()
            .then( data => this.saveDownloadUrl(id,data, this.profileCollectionRef) )
          .catch( err => console.log('An error has occurred: ', err) );
      })
    ).subscribe();
  }

  public saveDownloadUrl(documentId: string, downloadUrl: string, profileColRef: AngularFirestoreCollection) {
    this.dataService.saveDownloadURL(documentId, downloadUrl, profileColRef);
  }

  public editProfile($event) {
    const { description,degree,college,dob,email,certification} = $event;
    this.profileCollectionRef.doc(this.itemId).update({ description, degree, college, dob, email, certification })
  }

  public editModal(profile: IProfile) {
    this.formModalContent.isEditing = true;
    this.formModalContent.isVisible = true;
    this.formModalContent.title = 'Try editing your profile';
    this.formModalContent.buttonText = 'Edit Profile';

    this.itemId = profile.id;
  }
}
