    import java.util.Scanner;

   
    public class mathmagic {   
        public static void main(String[] args) {
            // TODO Auto-generated method stub
            int myNumber ;
             Scanner key = new Scanner(System.in);
              System.out.println("Enter a number: ") ;
              myNumber = key.nextInt();
                int first = 1 ;
              // int myNumber ; //we will referto myNumber as the original number from now on
                int stepOne = myNumber * first ;
            int stepTwo;
            stepTwo = stepOne + myNumber ;
            int stepThree;
            stepThree = stepTwo / myNumber ;
            int stepFour = stepThree + 17 ;
            int stepFive = stepFour - myNumber ;
            int stepSix = stepFive / 6 ;
            System.out.println(stepSix) ;
             
        }
    
    }
