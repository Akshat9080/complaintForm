var urlParams = new URLSearchParams(window.location.search);
    var complaintId = urlParams.get('id');

    // Get the complaint details from localStorage
    var complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    var complaintData = complaints.find(function(complaint) {
      return complaint.id === complaintId;
    });

    // Display the complaint details on the page
    if (complaintData) {
      document.getElementById('complaintId').textContent = complaintData.id;
      document.getElementById('cNum').textContent = complaintData.cnum;
      document.getElementById('complaintText').textContent = complaintData.complaint;
    } else {
      document.getElementById('complaintDetails').innerHTML = '<p>Complaint not found.</p>';
    }