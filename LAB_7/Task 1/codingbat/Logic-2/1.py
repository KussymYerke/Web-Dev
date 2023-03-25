def bricks_maker(small, big, goal):
  goal -= 5*min(big, goal//5)
  return goal <= small