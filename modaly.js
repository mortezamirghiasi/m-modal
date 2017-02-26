"use strict";
var modaly = (function () {
    function modaly() {
    }
    modaly.register = function (elements) {
        if (elements instanceof HTMLElement) {
            this.setOnClick(elements);
        }
        else {
            for (var index in elements) {
                if (elements[index] instanceof HTMLElement) {
                    this.setOnClick(elements[index]);
                }
            }
        }
    };
    modaly.urlResponse = function (url) {
        if (url !== null && url !== undefined && url !== '') {
            this.preLoad();
            this.loadUrlResponse(url);
        }
    };
    modaly.htmlString = function (htmlString) {
        if (htmlString !== null && htmlString !== undefined && htmlString !== '') {
            this.preLoad();
            this.loadEncodedString(htmlString);
        }
    };
    modaly.close = function () {
        this.remove();
    };
    modaly.setOnClick = function (element) {
        var _this = this;
        if (element.tagName === 'A') {
            element.onclick = function (event) {
                event.preventDefault();
                var element = event.target || event.srcElement;
                var url = element.getAttribute('href');
                if (url !== null && url !== undefined && url !== '') {
                    _this.preLoad();
                    _this.loadUrlResponse(url);
                }
            };
        }
    };
    modaly.remove = function () {
        var container = document.getElementById('modaly-container');
        if (container) {
            container.remove();
        }
    };
    modaly.preLoad = function () {
        var _this = this;
        if (document.getElementById('modaly-container')) {
            var dialog = document.getElementById('modaly-dialog');
            dialog.className = 'modaly-dialog';
            dialog.innerHTML = this.loading;
        }
        else {
            var container = document.createElement('div');
            container.id = container.className = 'modaly-container';
            var dialog = document.createElement('div');
            dialog.id = dialog.className = 'modaly-dialog';
            var closeButton = document.createElement('button');
            closeButton.onclick = function () { _this.remove(); };
            closeButton.id = closeButton.className = 'modaly-close';
            closeButton.innerHTML = '<span>Close</span>';
            dialog.innerHTML = this.loading;
            container.appendChild(closeButton);
            container.appendChild(dialog);
            document.body.appendChild(container);
        }
    };
    modaly.loadUrlResponse = function (url) {
        var _this = this;
        var request = new XMLHttpRequest();
        request.onload = function () {
            if (request.status === 200)
                _this.loadEncodedString(request.responseText);
        };
        request.open("GET", url, true);
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.send(null);
    };
    modaly.loadEncodedString = function (encodedString) {
        var dialog = document.getElementById('modaly-dialog');
        dialog.className = 'modaly-done';
        var fragment = document.createRange().createContextualFragment(encodedString);
        dialog.replaceChild(fragment, document.getElementById('modaly-loading'));
    };
    return modaly;
}());
modaly.loading = "<ul class='modaly-loading' id='modaly-loading'>\n    <li></li><li></li><li></li><li></li></ul>";
exports.modaly = modaly;
