/// <reference types="react-scripts" />

declare module '*.css';
declare module '*.scss' {
    const styles: { [key: string]: string };
    export default styles;
}
