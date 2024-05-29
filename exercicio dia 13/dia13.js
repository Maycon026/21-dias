class Computador {
    Tipo
    Processador
    Video 
    Armazenamento
    MemoriaRam
    Ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd;
    }

    ExibirInformacoes(){
        console.log("Informações do computador:");
        console.log(`Tipo: ${this.Tipo}`);
        console.log(`Processador ${this.Processador}`);
        console.log(`Vídeo: ${this.Video}`);
        console.log(`Armazenamento ${this.Armazenamento} GB`);
        console.log(`Memória RAM: ${this.MemoriaRam} GB`);
        console.log(`SSD: ${this.Ssd}`);
    }
}
const meuComputador = new Computador("notebook", "Ryzen 7", "Dedicado", 1000, 16, true);
meuComputador.ExibirInformacoes();