'use strict';

$(document).ready(function () {
    $("#dataButton").click(function () {
        $.get('data').done(function (data) {
            $("#dataLocation").html(data);
            $(this).hide();
        });
    });
});

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("elementID", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("elementID");
    ev.target.appendChild(document.getElementById(data));
}