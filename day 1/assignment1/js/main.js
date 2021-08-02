

function validateForm(e){
    e.preventDefault()
    const firstName =  $('#firstName').val();
    const lastName =  $('#lastName').val();
    const address = $('#address').val()
    const city = $('#city').val()
    const state = $('#state').val()
    const postalCode = $('#postalCode').val()
    const country = $('#country').val()
    const phone = $('#phone').val()
    const fax = $('#fax').val()
    const email = $('#email').val()
    const radio = $('input[name="radio"]').val()
    const requirements = $('#requirement').val()
    const cb =    $('#checkbox-agree').prop('checked')
 
    //also i have added validation in input by adding 'required' attribute

    //dont submit if fields are empty
    if(!firstName || !lastName || !address || !city || !state || !postalCode || !country || !phone || !fax || !email || !radio ||!requirements){
        alert('please add all the fields')
        return 
    }
    if(!cb){
        alert('please aggre to terms and conditions')
        return
    }


    //check postal code length
    if(postalCode.length != 6){
        alert('postal code should have exactly 6 digits')
        return
    }

    // validate email using regex
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(email)){
        alert('please add correct email pattern')
        return  
    }


     //form validated 
    alert('Form submitted successfully')

}

