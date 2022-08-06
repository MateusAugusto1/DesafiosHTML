import java.util.Scanner;
public class calc {

    public static void main(String[] args) {
        double n1, n2;
        double soma, subtracao, multiplicacao, divisao;
        int op;
        Scanner entrada = new Scanner (System.in);
        
        System.out.println("informe o Valor");
        n1 = entrada.nextDouble();
        System.out.println("Informe o segundo valor");
        n2 = entrada.nextDouble();
        
        System.out.println("##SELECIONE UMA OPERAÇÃO##");
        System.out.println("1 soma");
        System.out.println("2 subtracao");
        System.out.println("3 multipicacao");
        System.out.println("4 divisao");
        System.out.println(">>>>>>>>>>>>>>>> Digite sua opcao: ");
        op = entrada.nextInt();
        
        
        
        
        
        
        switch(op){
            case 1:
                soma = n1 + n2;
                    System.out.println("a soma é:" +soma);
                    break;
            case 2:
                subtracao = n1 - n2;
                    System.out.println("a subtracao  é:" + subtracao);
                    break;
            case 3:
                 multiplicacao = n1*n2;
                    System.out.println("a multiplicacao é:" +multiplicacao);
                    break;
            case 4:
                if (n1<n2){
                    System.out.println("impossivel realizar o calculo");
                
                }else{
                    divisao = n1/n2;
                    System.out.println("a divisao é:" +divisao);
                    
                }
                  break;
                  
                  
            default:
                System.out.println("operacao invalida");
        }
        
        }
}
