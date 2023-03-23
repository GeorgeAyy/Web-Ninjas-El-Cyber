function validateProductName(field){
    if(field==''){
      document.getElementById('nameid').innerHTML='You must enter the products name !';
      document.getElementById('productname').style.borderColor='red';
      return false;
    }
    else{
      document.getElementById('nameid').innerHTML='';
      document.getElementById('productname').style.borderColor='black';
      return true;
    }
  }
  
  function validateProductID(field){
    if(field==''){
      document.getElementById('idid').innerHTML='You must enter an ID !';
      document.getElementById('ID').style.borderColor='red';
      return false;
    }
    else{
      document.getElementById('idid').innerHTML='';
      document.getElementById('ID').style.borderColor='black';
      return true;
    }
  }
function validate(form){
    let fail='';
    fail&=validateProductName(form.productname.value.trim());
    fail&=validateProductID(form.ProductID.value.trim());
    if(fail)
      return true;
    else{
      return false;
    }
  }