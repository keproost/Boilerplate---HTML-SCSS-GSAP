
import $ from 'jquery';


const customFormScripts = {
    // Form validation
    // formValidator() {
    //     window.addEventListener('load', function () {
    //         // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //         const forms = document.getElementsByClassName('needs-validation');
    //         // Loop over them and prevent submission
    //         const validation = Array.prototype.filter.call(forms, function (form) {
    //             form.addEventListener('submit', function (event) {
    //                 if (form.checkValidity() === false) {
    //                     event.preventDefault();
    //                     event.stopPropagation();
    //                 }
    //                 form.classList.add('was-validated');
    //             }, false);
    //         });
    //     }, false);
    // },

    formCheckboxHighlight() {
    // Checkbox highlighting on active
        $('.custom-control-label').on('click', function () {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
            } else {
                $(this).parent().addClass('active');
            }
        });
    },

    stepFormWizard() {
        let currentTab = 0; // Current tab is set to be the first tab (0)

        function fixStepIndicator(n) {
            // This function removes the "active" class of all steps...
            let i; const
                x = document.getElementsByClassName('step');
            for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(' active', '');
            }
            // ... and adds the "active" class to the current step:
            x[n].className += ' active';
        }

        function showTab(n) {
            // This function will display the specified tab of the form ...
            const x = document.getElementsByClassName('tab');
            x[n].style.display = 'block';
            // ... and fix the Previous/Next buttons:
            if (n == 0) {
                document.getElementById('prevBtn').style.display = 'none';
            } else {
                document.getElementById('prevBtn').style.display = 'inline';
            }
            if (n == (x.length - 1)) {
                document.getElementById('nextBtn').innerHTML = 'Submit';
            } else {
                document.getElementById('nextBtn').innerHTML = 'Next';
            }
            // ... and run a function that displays the correct step indicator:
            fixStepIndicator(n);
        }

        function validateForm() {
            // This function deals with validation of the form fields
            const x = document.getElementsByClassName('tab');
            const y = x[currentTab].getElementsByTagName('input');
            let i;
            let valid = true;
            // A loop that checks every input field in the current tab:
            for (i = 0; i < y.length; i++) {
                // If a field is empty...
                if (y[i].value == '') {
                    // add an "invalid" class to the field:
                    y[i].className += ' invalid';
                    // and set the current valid status to false:
                    valid = false;
                }
            }
            // If the valid status is true, mark the step as finished and valid:
            if (valid) {
                document.getElementsByClassName('step')[currentTab].className += ' finish';
            }
            return valid; // return the valid status
        }

        function nextPrev(n) {
            // This function will figure out which tab to display
            const x = document.getElementsByClassName('tab');
            // Exit the function if any field in the current tab is invalid:
            if (n == 1 && !validateForm()) return false;
            // Hide the current tab:
            x[currentTab].style.display = 'none';
            // Increase or decrease the current tab by 1:
            currentTab += n;
            // if you have reached the end of the form... :
            if (currentTab >= x.length) {
                // ...the form gets submitted:
                document.getElementById('bookademoform').submit();
                return false;
            }
            // Otherwise, display the correct tab:
            showTab(currentTab);
            return true;
        }

        showTab(currentTab); // Display the current tab
    }


};


export default customFormScripts;
