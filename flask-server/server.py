import random
import uuid
import base64

from flask import Flask, Response, render_template
from PIL import Image, ImageDraw
from io import BytesIO

app = Flask(__name__)

#Members API Route
@app.route("/art")

def art():
#   return {"members": ["Member1", "Member2", "Member3"]}

# if __name__ == "__main__":
#   app.run(debug=True)

#art route
# @app.route("/art")

# def art():
  run_id = uuid.uuid1()

  print(f'Processing run_id: {run_id}')

  image = Image.new('RGB', (2000, 2000))
  width, height = image.size

  rectangle_width = 100
  rectangle_height = 100

  number_of_squares = random.randint(10, 550)

  draw_image = ImageDraw.Draw(image)
  for i in range(number_of_squares):
    rectangle_x = random.randint(0, width)
    rectangle_y = random.randint(0, height)

    rectangle_shape = [
        (rectangle_x, rectangle_y),
        (rectangle_x + rectangle_width, rectangle_y + rectangle_height)]
    draw_image.rectangle(
        rectangle_shape,
        fill=(
            random.randint(0, 255),
            random.randint(0, 255),
            random.randint(0, 255)
        )
    )

  #image.save(f'./output/{run_id}.png')
  img_io = BytesIO()
  image.save(img_io, 'PNG')
  img_io.seek(0)
  img_base64 = base64.b64encode(img_io.getvalue()).decode('ascii')
  return render_template('image.html', img_data=img_base64)

if __name__ == "__main__":
  app.run(debug=True)