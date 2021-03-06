import { IPropertyPaneField, PropertyPaneFieldType, IPropertyPaneCustomFieldProps } from "@microsoft/sp-property-pane";

export class PropertyPaneLogo implements IPropertyPaneField<IPropertyPaneCustomFieldProps> {
    public type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;
    public targetProperty: string;
    public properties: IPropertyPaneCustomFieldProps;

    constructor() {
        this.properties = {
            key: 'Logo',
            onRender: this.onRender.bind(this)
        };
    }

    private onRender(elem: HTMLElement): void {
        elem.innerHTML = `
    <div style="margin-top: 30px">
      <div style="float:right">Author: <a href="https://twitter.com/mikaelsvenson" tabindex="-1" target="_blank">Mikael Svenson</a></div>
      <div style="float:right"><a href="https://www.puzzlepart.com/" target="_blank"><img src="//www.puzzlepart.com/wp-content/uploads/2017/08/Pzl-LogoType-200.png" onerror="this.style.display = \'none\'";"></a></div>
    </div>`;
    }
}
export default PropertyPaneLogo;