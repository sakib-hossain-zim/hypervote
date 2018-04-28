import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ShareService } from './Share.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Share',
	templateUrl: './Share.component.html',
	styleUrls: ['./Share.component.css'],
  providers: [ShareService]
})
export class ShareComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          shareId = new FormControl("", Validators.required);
        
  
      
          description = new FormControl("", Validators.required);
        
  
      
          company = new FormControl("", Validators.required);
        
  
      
          votedecision = new FormControl("", Validators.required);
        
  
      
          sharequantity = new FormControl("", Validators.required);
        
  
      
          owner = new FormControl("", Validators.required);
        
  
      
          issuer = new FormControl("", Validators.required);
        
  


  constructor(private serviceShare:ShareService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          shareId:this.shareId,
        
    
        
          description:this.description,
        
    
        
          company:this.company,
        
    
        
          votedecision:this.votedecision,
        
    
        
          sharequantity:this.sharequantity,
        
    
        
          owner:this.owner,
        
    
        
          issuer:this.issuer
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceShare.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.sample.Share",
      
        
          "shareId":this.shareId.value,
        
      
        
          "description":this.description.value,
        
      
        
          "company":this.company.value,
        
      
        
          "votedecision":this.votedecision.value,
        
      
        
          "sharequantity":this.sharequantity.value,
        
      
        
          "owner":this.owner.value,
        
      
        
          "issuer":this.issuer.value
        
      
    };

    this.myForm.setValue({
      
        
          "shareId":null,
        
      
        
          "description":null,
        
      
        
          "company":null,
        
      
        
          "votedecision":null,
        
      
        
          "sharequantity":null,
        
      
        
          "owner":null,
        
      
        
          "issuer":null
        
      
    });

    return this.serviceShare.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "shareId":null,
        
      
        
          "description":null,
        
      
        
          "company":null,
        
      
        
          "votedecision":null,
        
      
        
          "sharequantity":null,
        
      
        
          "owner":null,
        
      
        
          "issuer":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.sample.Share",
      
        
          
        
    
        
          
            "description":this.description.value,
          
        
    
        
          
            "company":this.company.value,
          
        
    
        
          
            "votedecision":this.votedecision.value,
          
        
    
        
          
            "sharequantity":this.sharequantity.value,
          
        
    
        
          
            "owner":this.owner.value,
          
        
    
        
          
            "issuer":this.issuer.value
          
        
    
    };

    return this.serviceShare.updateAsset(form.get("shareId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceShare.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceShare.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "shareId":null,
          
        
          
            "description":null,
          
        
          
            "company":null,
          
        
          
            "votedecision":null,
          
        
          
            "sharequantity":null,
          
        
          
            "owner":null,
          
        
          
            "issuer":null 
          
        
      };



      
        if(result.shareId){
          
            formObject.shareId = result.shareId;
          
        }else{
          formObject.shareId = null;
        }
      
        if(result.description){
          
            formObject.description = result.description;
          
        }else{
          formObject.description = null;
        }
      
        if(result.company){
          
            formObject.company = result.company;
          
        }else{
          formObject.company = null;
        }
      
        if(result.votedecision){
          
            formObject.votedecision = result.votedecision;
          
        }else{
          formObject.votedecision = null;
        }
      
        if(result.sharequantity){
          
            formObject.sharequantity = result.sharequantity;
          
        }else{
          formObject.sharequantity = null;
        }
      
        if(result.owner){
          
            formObject.owner = result.owner;
          
        }else{
          formObject.owner = null;
        }
      
        if(result.issuer){
          
            formObject.issuer = result.issuer;
          
        }else{
          formObject.issuer = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "shareId":null,
        
      
        
          "description":null,
        
      
        
          "company":null,
        
      
        
          "votedecision":null,
        
      
        
          "sharequantity":null,
        
      
        
          "owner":null,
        
      
        
          "issuer":null 
        
      
      });
  }

}
