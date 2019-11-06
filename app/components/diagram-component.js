import Component from '@ember/component';
import $ from 'jquery';
export default Component.extend({
    flag: '',
    didInsertElement() {
        this._super(...arguments);
        let width = $('#container1').width();
        console.log("print width", width);
        let height = $('#container1').height();
        console.log("print height", height);
        console.log(width);

        let stage = new Konva.Stage({
            container: 'container1',
            x: 600,
            y: 200,
            width: width,
            height: height
            
        });
        stage.on('click', () => {
            let flag = this.get('flag');
            console.log(flag);
            if (flag =='circle-button') {
                this.drawCircle(stage)
                console.log(flag);
            }
            if (flag =='rectangle-button') {
                this.drawRectangle1(stage)
            }

            if (flag == 'star-button') {
                this.drawStar(stage)
            }
            
        })


        //this.drawRectangle1(stage);
        // this.drawRectangle2(stage);
        // this.drawRectangle3(stage);
        // this.drawCircle1(stage);
        // this.drawOval1(stage);
        // this.drawWedge1(stage);

        //this.drawtriangle(stage);
        //this.drawCircle(stage);
        //this.drawStar(stage);
        this.drawButton(stage);
    },

    drawRectangle1(stage) {
        let layer = new Konva.Layer();

        let rect1 = new Konva.Rect({
            x: 10,
            y: 20,
            width: 100,
            height: 50,
            fill: 'gray',
            stroke: 'black',
            strokeWidth: 1,
            draggable: true,
            shadowColor: 'silver',
            shadowBlur: 0,
            shadowOffset: { x: 8, y: 8 },
            shadowOpacity: 0.6
        });
        // add the shape to the layer
        layer.add(rect1);

        stage.add(layer);
    },
    drawArrow(stage) {
        let layer = new Konva.Layer();

        let arrow = new Konva.Rect({
            x: 10,
            y: 20,
            width: 100,
            height: 50,
            fill: 'gray',
            stroke: 'black',
            strokeWidth: 1,
            draggable: true,
            shadowColor: 'silver',
            shadowBlur: 0,
            shadowOffset: { x: 8, y: 8 },
            shadowOpacity: 0.6
        });
        // add the shape to the layer
        layer.add(arrow);

        stage.add(layer);
    },
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
        let group = new Konva.Group();
        let circle = new Konva.Circle({
            x: 230,
            y: 100,
            radius: 60,
            fill: 'maroon',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true,
            shadowColor: 'maroon',
            shadowBlur: 0,
            shadowOffset: { x: 8, y: 8 },
            shadowOpacity: 0.3
            //cancelBubble();

        });
        circle.on('click', function (evt) {
            alert(this.get(drawCircle));
            evt.cancelBubble = true;
        });

        group.on('click', function () {
            alert('You clicked on the group!');
        });

        layer.on('click', function () {
            alert('You clicked on the layer!');
        });
        // add the shape to the layer
        group.add(circle);

        layer.add(group);
        stage.add(layer);
    },

    drawStar(stage) {
        let layer = new Konva.Layer();

        let star = new Konva.Star({
            x: stage.width() / 4,
            y: stage.height() / 4,
            numPoints: 7,
            innerRadius: 40,
            outerRadius: 70,
            fill: 'teal',
            draggable: true,
            shadowColor: 'teal',
            shadowBlur: 0,
            shadowOffset: { x: 8, y: 8 },
            shadowOpacity: 0.3,
            stopPropagation() { },
            scale: {
                x: 2,
                y: 0.5
            },
            name: 'The Star'
        });

        layer.on('click', function (evt) {
            // get the shape that was clicked on
            var shape = evt.target;
            alert('you clicked on "' + shape.name() + '"');
        });

        layer.add(star);

        // add the layer to the stage
        stage.add(layer);
    },


    drawButton(stage) {
        let layer = new Konva.Layer();
        stage.add(layer);
        let context=this;

        var button = new Konva.Label({
            x: 20,
            y: 20,
            opacity: 0.75
        });

        layer.add(button);

        button.add(new Konva.Tag({
            fill: 'black',
            lineJoin: 'round',
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: 10,
            shadowOpacity: 0.5
        }));

        // button.add(new Konva.Text({
        //     //text: 'Canvas button',
        //     fontFamily: 'Calibri',
        //     fontSize: 18,
        //     padding: 5,
        //     fill: 'white'
        // }));


        button.on('click', () => {
            alert('clicked on canvas button');
        })

        document.querySelector('#button1').addEventListener('click', () => {
            //alert('clicked on Circle button');
            context.set('flag', 'circle-button');
        })
        document.querySelector('#button2').addEventListener('click', () => {
            // alert('clicked on Rectangle button');
            context.set('flag', 'rectangle-button');
        })
        document.querySelector('#button3').addEventListener('click', () => {
            //alert('clicked on Star button');
            context.set('flag', 'star-button');
        })
        
        document.querySelector('#button4').addEventListener('click', () => {
            //alert('clicked on Save button');
            context.set('flag', 'save-button');
        })
        document.querySelector('#button5').addEventListener('click', () => {
            //alert('clicked on Save button');
            context.set('flag', 'arrow-button');
        })
        layer.draw();
        
    },
   


    //     let context =this;
    //     let layer = new Konva.Layer();

    //     let triangle = new Konva.RegularPolygon({
    //         x: 80,
    //         y: 120,
    //         sides: 3,
    //         radius: 80,
    //         fill: '#00D2FF',
    //         stroke: 'black',
    //         strokeWidth: 4,
    //         draggable: true
    //     });


    //     triangle.on('mouseout', function () {
    //         writeMessage('Mouseout triangle');
    //     });

    //     triangle.on('mousemove', function () {
    //         let mousePos = stage.getPointerPosition();
    //         let x = mousePos.x - 190;
    //         let y = mousePos.y - 40;
    //         //layer.draw();
    //         context.writeMessage(x, y, layer);
    //     });

    // add the shape to the layer
    //layer.add(triangle);
    //stage.add(layer);
    //},
},

);
