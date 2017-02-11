var Modal = (function () {
    function Modal() {
    }
    Modal.register = function (elements) {
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
    Modal.showUrlResponse = function (url) {
        if (url !== null && url !== undefined && url !== '') {
            this.preLoad();
            this.loadUrlResponse(url);
        }
    };
    Modal.showEncodedString = function (encodedString) {
        if (encodedString !== null && encodedString !== undefined && encodedString !== '') {
            this.preLoad();
            this.loadEncodedString(encodedString);
        }
    };
    Modal.close = function () {
        this.remove();
    };
    Modal.setOnClick = function (element) {
        var _this = this;
        if (element.tagName === 'A') {
            element.onclick = function (e) {
                e.preventDefault();
                var url = e.srcElement.getAttribute('href');
                if (url !== null && url !== undefined && url !== '') {
                    _this.preLoad();
                    _this.loadUrlResponse(url);
                }
            };
        }
    };
    Modal.remove = function () {
        document.getElementById('m-modal-container').remove();
    };
    Modal.preLoad = function () {
        var _this = this;
        if (document.getElementById('m-modal-container')) {
            var dialog = document.getElementById('m-modal-dialog');
            dialog.className = 'm-modal-dialog';
            dialog.innerHTML = this.loading;
        }
        else {
            var container = document.createElement('div');
            container.id = container.className = 'm-modal-container';
            var dialog = document.createElement('div');
            dialog.id = dialog.className = 'm-modal-dialog';
            var closeButton = document.createElement('button');
            closeButton.onclick = function () { _this.remove(); };
            closeButton.id = closeButton.className = 'm-modal-close';
            closeButton.innerHTML = '<span>Close</span>';
            dialog.innerHTML = this.loading;
            container.appendChild(closeButton);
            container.appendChild(dialog);
            document.body.appendChild(container);
        }
    };
    Modal.loadUrlResponse = function (url) {
        var _this = this;
        var xhReq = new XMLHttpRequest();
        xhReq.onreadystatechange = function () {
            if (xhReq.readyState == 4) {
                var dialog = document.getElementById('m-modal-dialog');
                dialog.className = 'm-modal-done';
                _this.loadEncodedString(xhReq.responseText);
            }
        };
        xhReq.open("GET", url, true);
        xhReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhReq.send(null);
    };
    Modal.loadEncodedString = function (encodedString) {
        var dialog = document.getElementById('m-modal-dialog');
        dialog.className = 'm-modal-done';
        dialog.innerHTML = encodedString;
    };
    return Modal;
}());
Modal.loading = "<ul class='roatation-squar'><li></li><li></li><li></li><li></li></ul>";
