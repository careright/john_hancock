//= require signature_pad.umd.min.js

document.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById("JohnHancock-canvas");
  const hidden_field = document.getElementById("JohnHancock-hidden");

  if (canvas && hidden_field) {
    const parent_form = canvas.closest("form");
    const signaturePad = new SignaturePad(canvas);

    parent_form.onsubmit = function() {
      hidden_field.value = signaturePad.toDataURL()
    }

    function resizeCanvas() {
      let ratio =  Math.max( 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
      signaturePad.clear();
    }

    resizeCanvas();
  }
}, false)

function signatureClear() {
  let canvas = document.getElementById("JohnHancock-canvas");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}
