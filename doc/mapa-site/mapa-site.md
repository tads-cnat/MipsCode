# Mapa do Site 
```mermaid
  
flowchart TB
style A fill:#9747FF,stroke:#9747FF,stroke-width:3px,color: #FFFFFF  
style B fill:#0D99FF,stroke:#0D99FF,stroke-width:3px,color: #FFFFFF  
style C fill:#14AE5C,stroke:#14AE5C,stroke-width:3px,color: #FFFFFF  
style D fill:#F24822,stroke:#F24822,stroke-width:3px,color: #FFFFFF  
style E fill:#FFCD29,stroke:#FFCD29,stroke-width:3px,color: #000000
style F fill:#1E1E1E,stroke:#1E1E1E,stroke-width:3px,color: #FFFFFF
style G fill:#14AE5C,stroke:#14AE5C,stroke-width:3px,color: #FFFFFF
style j fill:#14AE5C,stroke:#14AE5C,stroke-width:3px,color: #FFFFFF
style k fill:#14AE5C,stroke:#14AE5C,stroke-width:3px,color: #FFFFFF
style l fill:#14AE5C,stroke:#14AE5C,stroke-width:3px,color: #FFFFFF
style m fill:#14AE5C,stroke:#14AE5C,stroke-width:3px,color: #FFFFFF
style n fill:#14AE5C,stroke:#14AE5C,stroke-width:3px,color: #FFFFFF


A[Home] ---> B[Cadastrar]  
A[Home] ---> C[Login]  
A[Home] ---> D[Documentação]  
A[Home] ---> E[Fale conosco]  
A[Home] ---> F[Comunidade Externa]  
C[Login] ---> G[Dashboard]  
G[Dashboard] --> j[Projetos]

subgraph I[Loggin Area]
	style I fill:#AFF4C6,stroke:#AFF4C6,stroke-width:3px,color: #00000
		j[Projetos]
		k[IDE]
		l[Tutoriais]
		m[Configurações]
		n[Perfil]
end