var issues = {
    billingIssues: ['Failed payments', 'High and disputed charges', 'Lack of transparency','Data security and breach of privacy'],
    depositIssues: ['Bank Failure', 'Payment not credit', 'Fixed Deposit issue','Glitches in payment processing'],
    disconnectionnIssues: ['Slow network','Weak Wi-Fi signal','Physical connectivity issues','Exhausted IP addresses'],
    serviceIssues:['Customer satisfaction','Customer retention','Budgeting','Information security']
  };

  // Function to update the cities dropdown based on the selected country
  function updateSecondSelect() {
    var firstSelect = document.getElementById('first');
    var secondSelect = document.getElementById('second');
    var selectedFirst = firstSelect.value;

    // Clear existing options
    secondSelect.innerHTML = '';

    // Populate the cities dropdown with options based on the selected country
    issues[selectedFirst].forEach(function(second) {
      var option = document.createElement('option');
      option.value = second;
      option.text = second;
      secondSelect.appendChild(option);
    });
  }

  // Initial population of cities dropdown
  updateSecondSelect();

  function submitForm() {
    var complaintId = generateComplaintId();
    var customerNum = document.getElementById('cnum').value;
    var complaintText = document.getElementById('complaint').value;

    var complaintData = {
      id: complaintId,
      cnum: customerNum,
      complaint: complaintText,
    };

    // Save the complaint to localStorage
    saveComplaint(complaintData);

    // Redirect to the view page with the complaint ID as a query parameter
    window.location.href = 'view_complaint.html?id=' + complaintId;
  }

  function generateComplaintId() {
    return 'CMP' + Math.floor(Math.random() * 10000);
  }

  function saveComplaint(complaintData) {
    // Get existing complaints from localStorage or initialize an empty array
    var existingComplaints = JSON.parse(localStorage.getItem('complaints')) || [];

    // Add the new complaint to the array
    existingComplaints.push(complaintData);

    // Save the updated array back to localStorage
    localStorage.setItem('complaints', JSON.stringify(existingComplaints));
  }