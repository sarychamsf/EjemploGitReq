/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package EjemploBase;

import ch.aplu.turtle.Turtle;

/**
 *
 * @author Estudiante
 */
public class HiloBase2 extends Thread {

    private Turtle tortuga;

    public HiloBase2(Turtle tortuga) {
        this.tortuga = tortuga;
    }

    @Override
    public void run() {
        this.tortuga.left(90);
        this.tortuga.forward(90);
        this.tortuga.left(90);
        this.tortuga.forward(90);
        this.tortuga.left(90);
        this.tortuga.forward(90);
        this.tortuga.left(90);
        this.tortuga.forward(90);
    }
}
