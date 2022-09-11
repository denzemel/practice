function disable() {
  document.getElementById("title").disabled = true;
  document.getElementById("title").style.color = 'white';
  document.getElementById("descr").disabled = true;
  document.getElementById("decsr").style.color = 'white';
}
function enable() {
  document.getElementById("title").disabled = false;
  document.getElementById("title").style.color = 'black';
  document.getElementById("descr").disabled = false;
  document.getElementById("decsr").style.color = 'black';
}