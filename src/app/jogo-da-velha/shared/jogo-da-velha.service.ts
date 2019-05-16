import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;

  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;


  constructor() { }

  inicializar():void{
    this._showInicio =  true;
    this._showTabuleiro =  false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }


  /**
   * Inicializa todas as posições do tabuleiro com VAZIO = 0
   * @return void
   */
  inicializarTabuleiro():void{
    this.tabuleiro = [this.TAM_TAB];
    for(let i = 0; i <= this.TAM_TAB-1; i++){
      this.tabuleiro[i] = [this.VAZIO,this.VAZIO,this.VAZIO];
    }
  }

  /**
   * Método de acesso do tipo get que acessa a variável privada _showInicio
   * @return boolean Flag que controla se o jogo deve iniciar
   */
  get showInicio():boolean{
    return  this._showInicio;
  }

  /**
   * Método de acesso do tipo get que acessa a variável privada _showTabuleiro
   * @return boolean Flag que controla quando o tabuleiro do jogo aparece
   */
  get showTabuleiro():any{
    return this._showTabuleiro;
  }

  /**
   * Método de acesso do tipo get que acessa a variável privada _showFinal
   * @return boolean Flag que controla se o jogo finalizou
   */
  get showFinal():boolean{
    return this._showFinal;
  }

  /**
   * Método que mostra o jogador Atual
   * @return number Jogador atual que pode ser zero ou um
   */
  get jogador(): number{
    return this._jogador;
  }


  /**
   * Método que inicia o jogo.
   * @return void
   */
  iniciarJogo():void{
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  /**
   * Realiza a jogada do jogador no tabuleiro 
   * de acordo com as coordenadas passadas.
   * @param posX 
   * @param posY 
   * @return void
   */
  jogar(posX: number, posY:number):void{
    //jogada inválida
    if(this.tabuleiro[posX][posY] !== this.VAZIO 
      || this.vitoria){
        return;
      }
    
    this.tabuleiro[posX][posY] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(posX, posY,
      this.tabuleiro, this._jogador);

      
    if(!this.vitoria && this.numMovimentos < 9){
      this._jogador = (this._jogador === this.X) ? this.O : this.X;
      this.cpuJogar();
    }

    //houve vitória
    if(this.vitoria){
      this._showFinal = true;
    }

    //empate
    if(!this.vitoria && this.numMovimentos === 9){
      this._jogador = 0;
      this._showFinal = true;
    }

   

  }

  /**
   * Verifica e retorna se o jogo acabou.
   * @param linha 
   * @param coluna 
   * @param tabuleiro 
   * @param jogador 
   * @return any Array com as coordenadas vencedoras ou array vazio
   */
  fimJogo(linha: number, coluna: number,
    tabuleiro: any, jogador: number):any{
      let fim: any = false;

      //valida a linha
      if(tabuleiro[linha][0] ===jogador &&
        tabuleiro[linha][1] === jogador &&
        tabuleiro[linha][2] === jogador){
          fim = [[linha,0],[linha,1], [linha,2]];
      }

      //valida a coluna
      if(tabuleiro[0][coluna] ===jogador &&
        tabuleiro[1][coluna] === jogador &&
        tabuleiro[2][coluna] === jogador){
          fim = [[0,coluna],[1,coluna], [2,coluna]];
      }

      //valida diagonais
      if(tabuleiro[0][0] === jogador &&
        tabuleiro[1][1] === jogador &&
        tabuleiro[2][2] === jogador){
          fim = [[0,0],[1,1],[2,2]]
      }

      if(tabuleiro[0][2] === jogador &&
        tabuleiro[1][1] === jogador &&
        tabuleiro[2][0] === jogador){
          fim = [[0,2],[1,1],[2,0]]
      }

      return fim;
      
      
    }
    

    /**
     * Realiza uma jogada aleatória do computador.
     * @return void
     */
    cpuJogar():void{
      //verifica jogada de vitória
      let jogada: number[] = this.obterJogada(this.O);

      if(jogada.length <= 0){
        //tenta jogar para evitar vitória
        jogada = this.obterJogada(this.X);
      }

      if(jogada.length <= 0){
        //joga aleatório
        let jogadas: any = [];
        for(let i = 0; i<this.TAM_TAB;i++){
          for(let j=0; j<this.TAM_TAB; j++){
            if(this.tabuleiro[i][j] === this.VAZIO){
              jogadas.push([i,j]);
            }
          }
        }

        let k = Math.floor((Math.random() * (jogadas.length - 1) ));
        jogada = [jogadas[k][0], jogadas[k][1]];
      }

      this.tabuleiro[jogada[0]][jogada[1]] = this._jogador;
      this.numMovimentos++;
      this.vitoria = this.fimJogo(jogada[0], jogada[1],
        this.tabuleiro, this._jogador
        );

     if(!this.vitoria){
       this._jogador = (this._jogador === this.X) ? this.O: this.X;
     }
    }


    /**
     * Verifica o tabuleiro 
     * e retorna a próxima válida para vitória de um jogador.
     * @param jogador 
     * @return number[] Coordenadas que devem ser utilizadas.
     */
    obterJogada(jogador: number): number[]{
      let tab = this.tabuleiro;
      for(let lin=0; lin < this.TAM_TAB; lin++){
        for(let col = 0; col < this.TAM_TAB; col++){
          if(tab[lin][col] !== this.VAZIO){
            continue;
          }

          tab[lin][col] = jogador;
          if(this.fimJogo(lin, col, tab, jogador)){
            return [lin,col];
          }
          tab[lin][col] = this.VAZIO;
        }
      }

      return [];
    }

  /**
   * Retorna se a peça X deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
    exibirX(posX: number, posY:number):boolean{
      return this.tabuleiro[posX][posY] === this.X;
    }

  /**
   * Retorna se a peça O deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
    exibirO(posX: number, posY:number):boolean{
      return this.tabuleiro[posX][posY] === this.O;
    }

    /**
   * Retorna se a marcação de vitória deve ser exibida.
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean 
   */
    exibirVitoria(posX: number, posY:number):boolean{
      let exibirVitoria: boolean = false;

      if(!this.vitoria){
        return exibirVitoria;
      }

      for(let pos of this.vitoria){
        if(pos[0] === posX && pos[1] === posY){
          exibirVitoria = true;
          break;
        }
      }

      return exibirVitoria;
    }

  /**
   * Inicializa um novo jogo, assim como exibe o tabuleiro.
   *
   * @return void
   */
    novoJogo():void{
      this.inicializar();
      this._showFinal = false;
      this._showInicio = false;
      this._showTabuleiro = true;
    }

}
