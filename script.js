let c1;
let c2;
let rr;
let degg;
$('#rand').hide();
$('#row').hide();
$('#deg_change').hide();
$('#code_window').hide();
blend.onclick = function() {
    c1 = color1.value;
    c2 = color2.value;
    wrap.style.background = 'linear-gradient(90deg, ' + c1 + '  0%, ' + c2 + ' 100%)';
    $('#w1').slideToggle(400);
    $('#w2').slideToggle(400);
    $('#blend').fadeOut(400);
    $('#rand').fadeIn(400);
    $('#row').fadeIn(400);
    $('#deg_change').fadeIn(400);
};
rand.onclick = function() {
    c1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    c2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    wrap.style.background = 'linear-gradient(90deg, ' + c1 + '  0%, ' + c2 + ' 100%)';
    color1.value = c1;
    color2.value = c2;
    w1.style.backgroundColor = color1.value;
    w2.style.backgroundColor = color2.value;
};
unblend.onclick = function() {
    $('#w1').slideToggle(400);
    $('#w2').slideToggle(400);
    $('#blend').fadeIn(400);
    $('#rand').fadeOut(400);
    $('#row').fadeOut(400);
    $('#deg_change').fadeOut(400);
};
w1.style.backgroundColor = color1.value;
w2.style.backgroundColor = color2.value;
color1.oninput = function() {
    w1.style.backgroundColor = color1.value;
    c1 = color1.value;
    wrap.style.background = 'linear-gradient(90deg, ' + c1 + '  0%, ' + c2 + ' 100%)';
};
color2.oninput = function() {
    w2.style.backgroundColor = color2.value;
    c2 = color2.value;
    wrap.style.background = 'linear-gradient(90deg, ' + c1 + '  0%, ' + c2 + ' 100%)';
};
degg_ch.oninput = function() {
    deg_count.innerText = degg_ch.value;
    rr = degg_ch.value;
    wrap.style.background = 'linear-gradient('+ rr +'deg, ' + c1 + '  0%, ' + c2 + ' 100%)';
};
ring.onclick = function() {
    wrap.style.background = 'radial-gradient('+ c1 + ','+  c2 + ')';
    $('#deg_change').fadeOut(400);
    ring.style.backgroundColor = 'rgb(190, 220, 255)';
    cube.style.backgroundColor = '#fff';
};
cube.onclick = function() {
    wrap.style.background = 'linear-gradient('+ rr +'deg, ' + c1 + '  0%, ' + c2 + ' 100%)';
    $('#deg_change').fadeIn(400);
    ring.style.backgroundColor = '#fff';
    cube.style.backgroundColor = 'rgb(190, 220, 255)';
};
code_wiew.onclick = function() {
    $('#code_window').fadeIn(400);
    code_txt.innerText = wrap.style.background;
};
button_close.onclick = function() {
    $('#code_window').fadeOut(400);
};
