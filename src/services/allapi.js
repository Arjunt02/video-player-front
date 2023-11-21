import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequest";


// add video

    export const addVideo=async(body)=>{
        return await commonRequest("POST",`${BASE_URL}/videos`,body)
    }


// get video

   export const getVideo=async()=>{
      return await commonRequest("GET",`${BASE_URL}/videos`,"")
    }


// delete

   export const deleteVideo=async(id)=>{
      return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
    }


// add categories

   export const addCategory=async(body)=>{
      return await commonRequest("POST",`${BASE_URL}/catogories`,body)
    }

// get all categories

   export const getallCategories=async()=>{
      return await commonRequest("GET",`${BASE_URL}/catogories`,"")
   }


// Delete category

   export const deleteCategory=async(id)=>{
      return await commonRequest("DELETE",`${BASE_URL}/catogories/${id}`,{})
    }



// get history

   export const gethistory=async()=>{
       return await commonRequest("GET",`${BASE_URL}/watch_history`,"")
   }


// add history

   export const addhistory=async(body)=>{
      return await commonRequest("POST",`${BASE_URL}/watch_history`,body)
    }


 
    //  get single card details

    export const getVideos=async(id)=>{
      return await commonRequest("GET",`${BASE_URL}/videos/${id}`,"")
    }


   //  to update card details in catagory section

     
   export const updateCategory=async(id,body)=>{
      return await commonRequest("PUT",`${BASE_URL}/catogories/${id}`,body)
    }