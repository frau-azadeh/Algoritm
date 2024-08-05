class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return undefined;
        var current = this.root;
        while(current){
            if(value === current.value) return current;
            if(value < current.value){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return undefined;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root;
        while(current){
            if(value === current.value) return true;
            if(value < current.value){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}