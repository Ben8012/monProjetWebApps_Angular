/*import { HttpClient } from "@angular/common/http";
import { AsyncValidatorFn } from "@angular/forms";
import { observeOn, map } from "rxjs/operators";

export class checkIfLoginExistValidator {
 public static check(http_client: HttpClient):AsyncValidatorFn
 {
     return (control) => {
        return http_client.post<any>( "http://localhost:3000/user/testLogin ", {"login" : control.value})
        .pipe(
            map((responce : any) => {
                if(responce.error != null)
                    return {errorLoginExist : "true"}
                else
                    return null
            })
        )
     }
 }
}*/