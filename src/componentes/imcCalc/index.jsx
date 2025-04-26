import { useState } from "react";
import styles from './Imc.module.css';

const Imc = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const calculaImc = () => {
        const calculaAltura = altura /100
        const resultado = peso / (calculaAltura * calculaAltura)
    
        if (resultado < 18.5) {
            return (
                <section className={styles.containerLowWeight}>
                    <section className={styles.container}>
                        <h2 className={styles.formTittles}>Entenda o seu resultado</h2>
                        <b className={styles.texts}> Seu IMC é de, {resultado}, e está em 18,5 ou menos Abaixo do normal <br/> </b>
                        <p className={styles.texts}> Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>
                    </section>
                </section>

            )    
        } if (resultado >= 18.6 && resultado <= 24.9) {
            return (
                <section className={styles.containerRegular}>
                    <section className={styles.container}>
                        <h2 className={styles.formTittles}>Entenda o seu resultado</h2>
                        <b className={styles.texts}> Seu IMC é de, {resultado}, e está Entre 18,6 e 24,9 Normal <br/> </b>
                        <p className={styles.texts}> Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>
                    </section>
                </section>
            )
        } if (resultado >= 25 && resultado <= 29.9) {
            return (
                <section className={styles.containerOverWeight}>
                    <section className={styles.container}>
                        <h2 className={styles.formTittles}>Entenda o seu resultado</h2>
                        <b className={styles.texts}> Seu IMC é de, {resultado}, e está Entre 25,0 e 29,9 Sobrepeso <br/> </b>
                        <p className={styles.texts}> Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>
                    </section>
                </section>
            )
        } if (resultado >= 30 && resultado <= 34.9) {
            return (
                <section className={styles.containerObese1}>
                    <section className={styles.container}>
                        <h2 className={styles.formTittles}>Entenda o seu resultado</h2>
                        <b className={styles.texts}> Seu IMC é de, {resultado}, e está Entre 30,0 e 34,9 Obesidade grau I <br/> </b>
                        <p className={styles.texts}> Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>
                    </section>
                </section>
            )
        } if (resultado >= 35 && resultado <= 39.9) {
            return (
                <section className={styles.containerObese2}>
                    <section className={styles.container}>
                        <h2 className={styles.formTittles}>Entenda o seu resultado</h2>
                        <b className={styles.texts}> Seu IMC é de, {resultado}, e está Entre 35,0 e 39,9 Obesidade grau II <br/> </b>
                        <p className={styles.texts}> Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde. </p>
                    </section>
                </section>
            )
        } if (resultado > 40) {
            return (
                <section className={styles.containerObese3}>
                    <section className={styles.container}>
                        <h2 className={styles.formTittles}>Entenda o seu resultado</h2>
                        <b className={styles.texts}> Seu IMC é de, {resultado}, e está Acima de 40,0 Obesidade grau III <br/> </b>
                        <p className={styles.texts}> Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente. </p>
                    </section>
                </section>
            )
        } 
    }

    return (
        <section className={styles.container}>
            <h1 className={styles.formTittles}> Calculadora de IMC </h1>
            <p> Complete os campos com sua altura e peso para poder calcular seu IMC </p>
            <form className={styles.form}>
            <input type="number" placeholder="Altura exemplo: 171" onChange={evento => setAltura(evento.target.value )} />                    
            <input type="number" placeholder="Peso exemplo: 59" onChange={evento => setPeso(evento.target.value )} />
            {calculaImc()}
            </form>
        </section>
    )
}

export default Imc