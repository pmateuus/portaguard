document.addEventListener('DOMContentLoaded', function () {
    const controlVisitantesLink = document.querySelector('.control-visitantes-link');
    const controlNotasLink = document.querySelector('.control-notas-link');
    const consultaDadosLink = document.querySelector('.consulta-dados-link');
    const areaAdmLink = document.querySelector('.area-adm-link');

    const entradaVisitanteSection = document.getElementById('hidden-section-1');
    const saidaVisitanteSection = document.getElementById('hidden-section-2');
    const entradaSaidaNotasSection = document.getElementById('hidden-section-3');
    const bancoDadosSection = document.getElementById('hidden-section-4');
    const gerenciamentoUsuariosSection = document.getElementById('hidden-section-5');

    if (
        controlVisitantesLink && controlNotasLink &&
        consultaDadosLink && areaAdmLink &&
        entradaVisitanteSection && saidaVisitanteSection &&
        entradaSaidaNotasSection && bancoDadosSection && gerenciamentoUsuariosSection
    ) {
        // Adiciona evento de clique para Controle de Visitantes
        controlVisitantesLink.addEventListener('click', function (event) {
            event.preventDefault();
            entradaVisitanteSection.classList.toggle('hidden-section');
            saidaVisitanteSection.classList.toggle('hidden-section');
            entradaSaidaNotasSection.classList.add('hidden-section');
            bancoDadosSection.classList.add('hidden-section');
            gerenciamentoUsuariosSection.classList.add('hidden-section');
        });

        // Adiciona evento de clique para Controle de Notas Fiscais
        controlNotasLink.addEventListener('click', function (event) {
            event.preventDefault();
            entradaSaidaNotasSection.classList.toggle('hidden-section');
            entradaVisitanteSection.classList.add('hidden-section');
            saidaVisitanteSection.classList.add('hidden-section');
            bancoDadosSection.classList.add('hidden-section');
            gerenciamentoUsuariosSection.classList.add('hidden-section');
        });

        // Adiciona evento de clique para Consulta de Dados
        consultaDadosLink.addEventListener('click', function (event) {
            event.preventDefault();
            bancoDadosSection.classList.toggle('hidden-section');
            entradaVisitanteSection.classList.add('hidden-section');
            saidaVisitanteSection.classList.add('hidden-section');
            entradaSaidaNotasSection.classList.add('hidden-section');
            gerenciamentoUsuariosSection.classList.add('hidden-section');
        });

        // Adiciona evento de clique para Área do Adm
        areaAdmLink.addEventListener('click', function (event) {
            event.preventDefault();
            gerenciamentoUsuariosSection.classList.toggle('hidden-section');
            entradaVisitanteSection.classList.add('hidden-section');
            saidaVisitanteSection.classList.add('hidden-section');
            entradaSaidaNotasSection.classList.add('hidden-section');
            bancoDadosSection.classList.add('hidden-section');
        });
    } else {
        console.error('Um ou mais elementos não foram encontrados.');
    }
});
