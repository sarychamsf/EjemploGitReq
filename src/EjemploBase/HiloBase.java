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
public class HiloBase extends Thread{
     private Turtle tortuga;

    public HiloBase(Turtle tortuga) {
        this.tortuga = tortuga;
    }

    @Override
    public void run() {
      this.tortuga.forward(100);
    }
}
