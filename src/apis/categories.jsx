
export const fetchCategories = async ()=>{
   const response = await fetch('http://localhost:3004/api/v1/categories',{ mode: 'no-cors' });
   console.log(response)
   return response.json()
} 
