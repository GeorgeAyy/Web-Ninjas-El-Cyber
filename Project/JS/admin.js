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
  function upvalidateProductName(field){
    if(field==''){
      document.getElementById('upnameid').innerHTML='You must enter the products name !';
      document.getElementById('upproductname').style.borderColor='red';
      return false;
    }
    else{
      document.getElementById('upnameid').innerHTML='';
      document.getElementById('upproductname').style.borderColor='black';
      return true;
    }
  }
  
  function upvalidateProductID(field){
    if(field==''){
      document.getElementById('upidid').innerHTML='You must enter an ID !';
      document.getElementById('upID').style.borderColor='red';
      return false;
    }
    else{
      document.getElementById('upidid').innerHTML='';
      document.getElementById('upID').style.borderColor='black';
      return true;
    }
  }

  function validate1(form){
    let fail='';
    fail&=upvalidateProductName(form.upproductname.value.trim());
    fail&=upvalidateProductID(form.upProductID.value.trim());
    if(fail)
      return true;
    else{
      return false;
    }
  }
  