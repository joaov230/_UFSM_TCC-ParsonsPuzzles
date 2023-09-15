"def decompoe(valor, cedulas):\nresultado = []\nfor c in cedulas:\n    num = valor // c\n    if (num > 0):\n        resultado.append((num,c))\n    valor = valor % c\nreturn resultado"

"import unittestparson\nclass myTests(unittestparson.unittest):\n  def testOne(self):\n    self.assertEqual(decompoe(391,[100,50,20,10,5,2,1]),[(3,100), (1,50), (2,20), (1,1)],\"Calling function <code>decompoe(391,[100,50,20,10,5,2,1])</code>.\")\n    self.assertEqual(decompoe(412,[100,50,20,10,5,2,1]),[(4,100), (1,10), (1,2)],\"Calling function <code>decompoe(412,[100,50,20,10,5,2,1])</code>.\")\n    self.assertEqual(decompoe(53,[100,50,20,10,5,2,1]),[(1,50), (1,2), (1,1)],\"Calling function <code>decompoe(53,[100,50,20,10,5,2,1])</code>.\")\n  def testTwo(self):\n    self.assertEqual(decompoe(12,[100,50,20,10,5,2,1]),[(1,10), (1,2)],\"Calling function <code>decompoe(12,[100,50,20,10,5,2,1])</code>.\")\n    self.assertEqual(decompoe(93,[100,50,20,10,5,2,1]),[(1,50), (2,20), (1,2), (1,1)],\"Calling function <code>decompoe(93,[100,50,20,10,5,2,1])</code>.\")\n_test_result = myTests().main()"