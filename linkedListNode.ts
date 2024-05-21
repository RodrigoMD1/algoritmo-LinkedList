class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}




class LinkedList<T> {
  head: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
  }

  // el append se utilizara para agregar un nuevo nodo al final de la lista enlazada 
  append(value: T): void {
    const newNode = new LinkedListNode(value);// creacion de un nuevo nodo 

    if (!this.head) {// esto verifica el nodo head 
      this.head = newNode;
      return;
    }

    // esto recorre la lista hasta el ultimo nodo 
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    // agrega el nuevo nodo al final
    current.next = newNode;
  }


  // este print se utiliza para imprimir los valores de todos los nodos de la lista enlazada 
  print(): void {

    let current = this.head;// inicializa la variable current esta variable se utiliza para recorrer la lista 

    while (current) {
      console.log(current.value);
      current = current.next;
    }// este while recorre la lista mientras no sea null alguna de las interacciones del bucle 

    //*Ejemplo
    //const list = new LinkedList<number>();
    //list.append(1);
    //list.append(2);
    //list.append(3);  cuando llega aca el while el next que aparece arriba en la funcion while es null entonces ahi se termina la lista 

    //list.print();

  }


  // se utiliza para agregar un nuevo nodo al inicio de la lista enlazada 
  prepend(value: T): void {
    const newNode = new LinkedListNode(value);// se crea un nuevo nodo con el valor proporcionado (value)
    newNode.next = this.head;
    this.head = newNode;
  }// es como tener crear una lista vos agregas de derecha a izquieda 1 ,2,3 esto hace que empiece en 1 y le agregas el 2 y el 3 pero a la izquieda en 3,2,1  el 1 seria el inicio de la lista y esto agrega el resto 




  // se utiliza para eliminar el primer nodo que contiene un valor especifico de la lista enlazada 
  delete(value: T): void {
    if (!this.head) {
      return;
    } // esto verifica si la lista esta vacia si esta vacia termina el metodo ya que no tiene nada que eliminar 


    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }// esto elimina el nodo head si conincide con el valor 

    // esto recorre la lista para encontrar el nodo a eliminar 
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    // elimina el nodo encontrado
    if (current.next) {
      current.next = current.next.next;
    }
    //*ejemplo 
    //const list = new LinkedList<number>();
    //list.append(1);
    //list.append(2);
    //list.append(3);
    //list.append(4);
    //list.append(5);

    //list.delete(3);
  }






  // Método para buscar un valor en la lista
  find(value: T): LinkedListNode<T> | null {
    let current = this.head; // inicia el nodo actual

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }// este while recorre la lista para encontrar el valor 

    return null; // si se recorre toda a lista y no se encuentra el valor buscado devuelve ese null 

    //* ejemplo 
    // const list = new LinkedList<number>();
    //list.append(1);
    //list.append(2);
    //list.append(3);
    //list.append(4);
    //list.append(5);

    // const node = list.find(3);
    // if (node !== null) {
    //   console.log(`Nodo encontrado: ${node.value}`);
    // } else {
    //   console.log("Nodo no encontrado");
    //} EN ESTE EJEMPLO EL METODO FIND BUSCA EL VALOR DE 3 
  }






  // Método para obtener el tamaño de la lista
  size(): number {
    let count = 0;
    let current = this.head;// inicializa el contador y el nodo head / this.head se utiliza para recorrer la lista

    while (current) {
      count++;
      current = current.next;
    }// recorre la lista y cuenta los nodos 
    return count; // devuelve el tamaño de la lista 

    // const list = new LinkedList<number>();
    // list.append(1);
    // list.append(2);
    // list.append(3);
    // list.append(4);
    // list.append(5);
    // console.log(`El tamaño de la lista es: ${list.size()}`);

  }





  // Método para insertar un valor en una posición específica
  insertAt(value: T, index: number): void {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new LinkedListNode(value);
    let current = this.head;
    let previous: LinkedListNode<T> | null = null;
    let i = 0;

    while (current && i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    if (previous) {
      previous.next = newNode;
      newNode.next = current;
    }
  }





  // Método para revertir la lista
  reverse(): void {
    let prev: LinkedListNode<T> | null = null;
    let current = this.head;
    let next: LinkedListNode<T> | null = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}




