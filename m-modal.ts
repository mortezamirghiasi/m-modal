

abstract class Modal {
   public static register(elements: HTMLElement[] | HTMLElement): void {
            if (elements instanceof HTMLElement) {
                this.setOnClick(elements);
            } else{
                for (let index in elements) {
                   if(elements[index] instanceof HTMLElement){
                    this.setOnClick(elements[index]);
                   } 
                }           
            }
    }
 public static showUrlResponse(url: string): void {
 if (url !== null && url !== undefined && url!=='') {
        this.preLoad();
        this.loadUrlResponse(url);
 }
    }
   public static showEncodedString(encodedString: string): void {
           if (encodedString !== null && encodedString !== undefined && encodedString!=='') {
                this.preLoad();
                this.loadEncodedString(encodedString);
            }
    }
   public static close(): void {
        this.remove();
    }


      private static loading: string =
    "<ul class='roatation-squar' id='m-modal-loading'><li></li><li></li><li></li><li></li></ul>";
    
    private static setOnClick(element: HTMLElement) {
        if (element.tagName === 'A') {
            element.onclick = (e) => {
                e.preventDefault();
                let url = e.srcElement.getAttribute('href');
                if (url !== null && url !== undefined && url!=='') {
                    this.preLoad();
                    this.loadUrlResponse(url);
                }
            }
        }
    }
    private static remove(): void {
        let container = document.getElementById('m-modal-container');
        if(container){
            container.remove();
        }
    }
    private static preLoad(): void {
        if(document.getElementById('m-modal-container')){
            let dialog = document.getElementById('m-modal-dialog');
            dialog.className='m-modal-dialog';
            dialog.innerHTML = this.loading;
        }else{
        let container = document.createElement('div');
        container.id = container.className = 'm-modal-container';
        let dialog = document.createElement('div');
        dialog.id = dialog.className = 'm-modal-dialog';
        let closeButton = document.createElement('button');
        closeButton.onclick = () => { this.remove(); };
        closeButton.id = closeButton.className = 'm-modal-close';
        closeButton.innerHTML = '<span>Close</span>';
        dialog.innerHTML = this.loading;
        container.appendChild(closeButton);
        container.appendChild(dialog);
        document.body.appendChild(container);
        }
    }
    private static loadUrlResponse(url: string): void {
        let xhReq = new XMLHttpRequest();
        xhReq.onload = () => {
            if (xhReq.readyState == 4) {
                this.loadEncodedString(xhReq.responseText);
            }
        }
        xhReq.open("GET", url, true);
        xhReq.setRequestHeader('X-Requested-With','XMLHttpRequest');
        xhReq.send(null);
    }
    private static loadEncodedString(encodedString: string): void {
        let dialog = document.getElementById('m-modal-dialog');
        dialog.className = 'm-modal-done';
        let fragment = document.createRange().createContextualFragment(encodedString);
        dialog.removeChild(document.getElementById('m-modal-loading'));
        dialog.appendChild(fragment);
    }
    
}


