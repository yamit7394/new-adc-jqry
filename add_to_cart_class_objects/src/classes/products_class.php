<?php
    namespace App;
    class Products_{
        public int $id;
        public string $name;
        public string $image;
        public float $price;

        function __construct(int $id,string $name,string $image,float $price){
            $this->id=$id;
            $this->name=$name;
            $this->image=$image;
            $this->price=$price;
        }
    }
?>