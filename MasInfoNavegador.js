class MasInfo {
    constructor(){
        document.write("Version: ");
        document.write(infoNavegador.version);
        document.write(", Plataforma: ");
        document.write(infoNavegador.plataforma);
        document.write(", Vendedor: ");
        document.write(infoNavegador.vendedor);
        document.write(", Agente: ");
        document.write(infoNavegador.agente);
        document.write(", Java Activo: ");
        document.write(infoNavegador.javaActivo);
    }
}
var masInfo=new MasInfo();