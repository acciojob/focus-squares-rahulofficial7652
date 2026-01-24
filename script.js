/* If the container HAS a hovered square, make all squares coffee */
.container:has(.square:hover) .square {
  background-color: #6F4E37;
}

/* Except the one actually being hovered */
.square:hover {
  background-color: #E6E6FA !important;
}