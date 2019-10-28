import Component from '@ember/component';
import $ from 'jquery';
export default Component.extend({

    didInsertElement() {
        this._super(...arguments);
        let width = window.innerWidth;
        let height = window.innerHeight;
        console.log(width);

        let stage = new Konva.Stage({
            container: 'container1',
            x: 500,
            y: 100,
            width: width,
            height: height
        });

        // this.drawRectangle1(stage);
        // this.drawRectangle2(stage);
        // this.drawRectangle3(stage);
        // this.drawCircle1(stage);
        // this.drawOval1(stage);
        // this.drawWedge1(stage);

        this.drawtriangle(stage);
        this.drawCircle(stage);

    },

    writeMessage(mosX, mosY, layer) {
      
        let text = new Konva.Text({
            x: 10,
            y: 10,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '',
            fill: 'black'
        });
        text.text( 'x:' + mosX + 'y:' + mosY);
        layer.add(text);
        layer.draw();
        //stage.add(layer);
       
    },

    //  let text = new Konva.Text({
    //     x: 10,
    //     y: 10,
    //     fontFamily: 'Calibri',
    //     fontSize: 24,
    //     text: '',
    //     fill: 'black'
    //   });
    // drawRectangle1(stage) {
    //    let layer = new Konva.Layer();

    //    let rect1 = new Konva.Rect({
    //         x: 10,
    //         y: 20,
    //         width: 100,
    //         height: 50,
    //         fill: 'green',
    //         stroke: 'black',
    //         strokeWidth: 2,
    //         draggable: true
    //     });
    //     // add the shape to the layer
    //     layer.add(rect1);

    //     stage.add(layer);
    // },
    // drawRectangle2(stage) {
    //    let layer = new Konva.Layer();
    //    let rect2 = new Konva.Rect({
    //         x: 150,
    //         y: 40,
    //         width: 100,
    //         height: 50,
    //         fill: 'red',
    //         shadowBlur: 6,
    //         cornerRadius: 10,
    //         draggable: true
    //     });
    //     layer.add(rect2);

    //     stage.add(layer);
    // },

    // drawRectangle3(stage) {
    //    let layer = new Konva.Layer();
    //    let rect3 = new Konva.Rect({
    //         x: 50,
    //         y: 120,
    //         width: 100,
    //         height: 100,
    //         fill: 'purple',
    //         cornerRadius: 10,
    //         draggable: true
    //     });
    //     layer.add(rect3);

    //     stage.add(layer);
    // },


    // drawCircle1(stage) {
    //    let layer = new Konva.Layer();

    //    let circle = new Konva.Circle({
    //         x: stage.width() / 4,
    //         y: stage.height() / 4,
    //         radius: 70,
    //         fill: '#00D2FF',
    //         stroke: 'black',
    //         strokeWidth: 4,
    //         draggable: true
    //     });

    //     // add the shape to the layer
    //     layer.add(circle);

    //     stage.add(layer);
    // },

    // drawOval1(stage) {
    //    let layer = new Konva.Layer();

    //    let oval = new Konva.Ellipse({
    //         x: stage.width() / 2,
    //         y: stage.height() / 2,
    //         radiusX: 100,
    //         radiusY: 50,
    //         fill: 'yellow',
    //         stroke: 'black',
    //         strokeWidth: 4,
    //         draggable: true
    //     });

    //     // add the shape to the layer
    //     layer.add(oval);
    //     stage.add(layer);
    // },
    // drawWedge1(stage) {
    //    let layer = new Konva.Layer();

    //    let wedge = new Konva.Wedge({
    //       x: stage.width() /4,
    //       y: stage.height() /5,
    //       radius: 70,
    //       angle: 60,
    //       fill: 'red',
    //       stroke: 'black',
    //       strokeWidth: 4,
    //       rotation: -120,
    //       draggable: true
    //     });

    //     // add the shape to the layer
    //     layer.add(wedge);
    //     stage.add(layer);
    // },
    drawCircle(stage) {
        let layer = new Konva.Layer();
        let circle = new Konva.Circle({
            x: 230,
            y: 100,
            radius: 60,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

        // add the shape to the layer
        layer.add(circle);
        stage.add(layer);
    },

    drawtriangle(stage) {
        let context =this;
        let layer = new Konva.Layer();

        let triangle = new Konva.RegularPolygon({
            x: 80,
            y: 120,
            sides: 3,
            radius: 80,
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

       
        triangle.on('mouseout', function () {
            writeMessage('Mouseout triangle');
        });

        triangle.on('mousemove', function () {
            let mousePos = stage.getPointerPosition();
            let x = mousePos.x - 190;
            let y = mousePos.y - 40;
            //layer.draw();
            context.writeMessage(x, y, layer);
        });

        // add the shape to the layer
        layer.add(triangle);
        stage.add(layer);
    },
},

);
