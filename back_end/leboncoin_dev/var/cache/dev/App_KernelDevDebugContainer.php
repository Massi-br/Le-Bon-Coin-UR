<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerSE6zfEO\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerSE6zfEO/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerSE6zfEO.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerSE6zfEO\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerSE6zfEO\App_KernelDevDebugContainer([
    'container.build_hash' => 'SE6zfEO',
    'container.build_id' => '556609dd',
    'container.build_time' => 1711142552,
    'container.runtime_mode' => \in_array(\PHP_SAPI, ['cli', 'phpdbg', 'embed'], true) ? 'web=0' : 'web=1',
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerSE6zfEO');
