package course.com.dio;

import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int a, b;
        boolean fechado = false;
        String repetir;

        do {
            System.out.println("Digite o primeiro valor: ");
            a = scan.nextInt();
            System.out.println("Digite o segundo valor: ");
            b = scan.nextInt();

            int somar = somar(a,b);
            int subtrair = subtrair(a,b);
            int multiplicar = multiplicar(a,b);
            int dividir = dividir(a,b);
            int criarMedia = criarMedia(a,b);

            System.out.println("Soma: " + somar);
            System.out.println("Subtração: " + subtrair);
            System.out.println("Multiplicação: " + multiplicar);
            System.out.println("Divisão: " + dividir);
            System.out.println("Média: " + criarMedia);

            System.out.println("Deseja continuar (s/n): ");
            repetir = scan.next();
            if (repetir.equals("n")) {
                System.out.println("Finalizado aqui...");
                fechado = true;
            }
        } while (fechado == false);
        scan.close();
    }

    public static int somar(int a, int b) {
        return a + b;
    }

    public static int subtrair(int a, int b) {
        return a - b;
    }

    public static int multiplicar(int a, int b) {
        return a * b;
    }

    public static int dividir(int a, int b) {
        return a / b;
    }
    
    public static int criarMedia(int a, int b) {
        return (a + b) / 2;
    }
}
