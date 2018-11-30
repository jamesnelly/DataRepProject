import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post : any = [];
  myName : String; 
  myBorn : String;
  myHeight : String; 
  mySalary : String;
  mySportType : String; 
  myAchievement : String; 
  constructor(private router:Router, private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getPost(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.post = data;
      console.log(this.post);
      this.myName = this.post.Name;
      console.log("message" +this.myName);

        this.post = data;
        console.log(this.post);
        this.myBorn = this.post.Born;
        console.log("message" +this.myBorn);

          this.post = data;
          console.log(this.post);
          this.myHeight = this.post.Height;
          console.log("message" +this.myHeight);

            this.post = data;
            console.log(this.post);
            this.mySalary = this.post.Salary;
            console.log("message" +this.mySalary);

              this.post = data;
              console.log(this.post);
              this.mySportType = this.post.SportType;
              console.log("message" +this.mySportType);

              this.post = data;
              console.log(this.post);
              this.myAchievement = this.post.Achievement;
              console.log("message" +this.myAchievement);

    });
  }
  onEditPost(form: NgForm) {
    this.service.updatePost(this.post._id, form.value.Name, form.value.Born, form.value.Height, form.value.Salary, form.value.SportType, form.value.Achievement ).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}
