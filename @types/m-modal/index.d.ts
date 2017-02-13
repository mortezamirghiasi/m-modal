declare var Modal:IModalStatic;
declare module "Modal" {
    export = Modal;
}
interface IModalStatic{
    register(elements: HTMLElement[] | HTMLElement): void;
    showUrlResponse(url: string): void ;
    showEncodedString(encodedString: string): void;
    close(): void ;

}