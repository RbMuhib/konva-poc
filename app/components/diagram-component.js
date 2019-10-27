import Component from '@ember/component';
import $ from 'jquery';
export default Component.extend({

    didInsertElement() {
        this._super(...arguments);
        var width = window.innerWidth;
        var height = window.innerHeight;
        console.log(width);

        var stage = new Konva.Stage({
            container: 'container1',
            x: 500,
            y: 100,
            width: width,
            height: height
        });
          
        this.drawRectangle1(stage);
        this.drawRectangle2(stage);
        this.drawRectangle3(stage);
        this.drawCircle1(stage);
        this.drawOval1(stage);
        this.drawWedge1(stage);

    },

    drawRectangle1(stage) {
        var layer = new Konva.Layer();

        var rect1 = new Konva.Rect({
            x: 10,
            y: 20,
            width: 100,
            height: 50,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 2,
            draggable: true
        });
        // add the shape to the layer
        layer.add(rect1);

        stage.add(layer);
    },
    drawRectangle2(stage) {
        var layer = new Konva.Layer();
        var rect2 = new Konva.Rect({
            x: 150,
            y: 40,
            width: 100,
            height: 50,
            fill: 'red',
            shadowBlur: 6,
            cornerRadius: 10,
            draggable: true
        });
        layer.add(rect2);

        stage.add(layer);
    },

    drawRectangle3(stage) {
        var layer = new Konva.Layer();
        var rect3 = new Konva.Rect({
            x: 50,
            y: 120,
            width: 100,
            height: 100,
            fill: 'purple',
            cornerRadius: 10,
            draggable: true
        });
        layer.add(rect3);

        stage.add(layer);
    },


    drawCircle1(stage) {
        var layer = new Konva.Layer();

        var circle = new Konva.Circle({
            x: stage.width() / 4,
            y: stage.height() / 4,
            radius: 70,
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

        // add the shape to the layer
        layer.add(circle);

        stage.add(layer);
    },

    drawOval1(stage) {
        var layer = new Konva.Layer();

        var oval = new Konva.Ellipse({
            x: stage.width() / 2,
            y: stage.height() / 2,
            radiusX: 100,
            radiusY: 50,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

        // add the shape to the layer
        layer.add(oval);
        stage.add(layer);
    },
    drawWedge1(stage) {
        var layer = new Konva.Layer();

        var wedge = new Konva.Wedge({
          x: stage.width() /4,
          y: stage.height() /5,
          radius: 70,
          angle: 60,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 4,
          rotation: -120,
          draggable: true
        });
  
        // add the shape to the layer
        layer.add(wedge);
        stage.add(layer);
    },


},

);
