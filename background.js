function check() {
  ChokkuraGenerator.checkNewIssue();
  setTimeout(function() {check(); }, 1000);
}

check();
